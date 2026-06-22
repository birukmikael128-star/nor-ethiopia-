import React, { useState } from 'react';

export default function NorEthiopia() {
  const [lang, setLang] = useState('en');
  const [isReg, setIsReg] = useState(false);
  const [name, setName] = useState('');
  const [balance, setBalance] = useState(5000);

  const text = {
    en: { title: "Nor Ethiopia BNPL", reg: "Customer Registration", name: "Full Name", btn: "Apply for 5,000 ETB Limit", bal: "Available Balance" },
    am: { title: "ኖር ኢትዮጵያ ቢኤንፒኤል", reg: "የደንበኛ መመዝገቢያ", name: "ሙሉ ስም", btn: "የ 5,000 ብር ገደብ ያመልክቱ", bal: "ያለው ቀሪ ሂሳብ" },
    om: { title: "Noor Itoophiyaa BNPL", reg: "Maamila Galmeessuu", name: "Maqaa Guutuu", btn: "Daangaa Birrii 5,000 Gaafadhu", bal: "Haftee Qብሪ" }
  }[lang];

  return (
    <div className="p-6 max-w-xl mx-auto font-sans bg-gray-50 min-h-screen rounded-xl shadow-lg">
      <div className="flex justify-between items-center bg-emerald-700 p-4 text-white rounded-lg mb-6">
        <h1 className="text-xl font-black">{text.title}</h1>
        <div className="space-x-2 text-xs font-bold">
          {['en', 'am', 'om'].map(l => <button key={l} onClick={() => setLang(l)} className={`px-2 py-1 rounded ${lang === l ? 'bg-white text-emerald-800' : 'text-emerald-100'}`}>{l.toUpperCase()}</button>)}
        </div>
      </div>

      {!isReg ? (
        <form onSubmit={(e) => { e.preventDefault(); setIsReg(true); }} className="bg-white p-6 rounded-lg space-y-4 shadow-sm">
          <h2 className="font-bold border-b pb-2 text-emerald-800">{text.reg}</h2>
          <input type="text" placeholder={text.name} required value={name} onChange={e => setName(e.target.value)} className="w-full p-2 border rounded" />
          <button type="submit" className="w-full bg-emerald-600 text-white p-2 rounded font-bold">{text.btn}</button>
        </form>
      ) : (
        <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
          <p className="text-xs font-bold text-emerald-700 uppercase">Welcome {name}! {text.bal}</p>
          <p className="text-3xl font-black text-gray-800">{balance.toLocaleString()} <span className="text-sm font-bold">ETB</span></p>
        </div>
      )}
    </div>
  );
}
