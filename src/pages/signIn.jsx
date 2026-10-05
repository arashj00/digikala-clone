import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function SignInP() {
  const [fullName, setFullName] = useState("");
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
      await api.post("/auth/register", { fullName, phone, password });
      navigate("/login");
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
        className="flex h-120 w-110 flex-col items-center justify-center gap-4 rounded-xl border border-black/10 shadow-xl"
      >
        <img
          src="/imgs/digiicon.svg"
          alt="digikalaicon"
          className="mb-16 size-7 w-90/100 object-center"
        />
        <p className="w-90/100 text-xl">ثبت‌نام در دیجی‌کالا</p>
        <p className="text w-90/100 text-sm text-black/60">
          لطفا نام کامل، شماره موبایل و رمز عبور خود را ثبت کنید
        </p>
        <TextField
          className="w-90/100"
          dir="rtl"
          label="اسم و فامیل"
          size="small"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />
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
          {loading ? "در حال ثبت‌نام..." : "ثبت نام"}
        </button>
        <p className="text w-90/100 text-center text-[12px] text-black/60">
          ثبت نام شما به معنای پذیرش شرایط دیجی‌کالا و قوانین حریم‌ خصوصی است
        </p>
      </form>
    </div>
  );
}
