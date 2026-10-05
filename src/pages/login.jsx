import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useLoginStore } from "../store/loginStore";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function LoginP() {
  const login = useLoginStore((state) => state.login);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await api.post("/auth/login", { phone, password });
      login(response.data.user);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "ارتباط با سرور برقرار نشد");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex h-auto w-108 flex-col items-center justify-center gap-4 rounded-xl border border-black/10 shadow-xl"
      >
        <img
          src="/imgs/digiicon.svg"
          alt="digikalaicon"
          className="mt-5 mb-14 size-7 w-90/100 object-center"
        />
        <p className="w-90/100 text-xl">ورود به دیجی‌کالا</p>
        <p className="text w-90/100 text-sm text-black/60">
          لطفا شماره موبایل و رمز عبور خود را وارد کنید
        </p>
        <TextField
          className="w-90/100"
          dir="rtl"
          label="شماره موبایل"
          size="small"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <TextField
          className="w-90/100"
          dir="rtl"
          label="رمز عبور"
          size="small"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {error && <p className="w-90/100 text-sm text-red-500">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-90/100 rounded-lg bg-[#ed1944] py-2 text-center text-white disabled:opacity-60"
        >
          {loading ? "در حال ورود..." : "ورود به دیجی‌کالا"}
        </button>
        <div className="flex flex-row gap-1.5 text-sm">
          <p>حساب کاربری ندارید ؟</p>
          <Link to="/signIn" className="text-blue-500">
            ثبت نام
          </Link>
        </div>
        <p className="text mb-5 w-90/100 text-center text-[12px] text-black/60">
          ورود شما به معنای پذیرش شرایط دیجی‌کالا و قوانین حریم‌ خصوصی است
        </p>
      </form>
    </div>
  );
}
