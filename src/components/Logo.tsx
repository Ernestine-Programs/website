import { site } from "@/config/site";
export default function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5 font-semibold tracking-tight">
      <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden><rect x="1" y="1" width="20" height="20" rx="6" fill="#0E1013" stroke="#2B3038" />
        <path d="M6 7h7M6 11h5M6 15h7" stroke="#5B8CFF" strokeWidth="1.8" strokeLinecap="round" /><circle cx="16" cy="11" r="1.6" fill="#3DD6F5" /></svg>
      {site.name}
    </span>
  );
}
