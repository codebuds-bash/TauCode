export default function FunnyEditor() {
  return (
    <section className="p-8 bg-gray-950 text-green-400">
      <h2 className="text-3xl font-bold mb-4">TauCode Editor</h2>
      <pre className="bg-black p-4 rounded-xl shadow-xl overflow-x-auto">
{`// TauCode Sample
yo naam = "TauCoder";

agar (naam == "TauCoder") {
  bol_de("Bhai Tu toh Developer sai!");
} aur_fer {
  bol_de("Chal seekh le pehle TauCode!");
}
`}
      </pre>
    </section>
  );
}
