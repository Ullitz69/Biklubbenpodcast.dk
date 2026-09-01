'use client';

interface Host {
  name: string;
  role: string;
  image?: string;
}

const hosts: Host[] = [
  {
    name: 'Christian Grau',
    role: 'Vært & Grundlægger',
  },
  {
    name: 'Nils Petter Bro',
    role: 'Vært & Producer',
  },
  {
    name: 'Anders Richter',
    role: 'Vært & Designer',
  },
];

export default function Hosts() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-responsive">
        <h2 className="section-title">Mød Bilklubben</h2>
        <p className="section-subtitle">De drivende kræfter bag Danmarks beste bilpodcast</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hosts.map((host) => (
            <div key={host.name} className="text-center">
              {/* Host Image Placeholder */}
              <div className="w-40 h-40 mx-auto mb-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 shadow-lg hover:shadow-xl transition-shadow">
                <span className="text-center text-sm px-4">{host.name}</span>
              </div>

              <h3 className="text-xl font-bold text-primary mb-1">{host.name}</h3>
              <p className="text-text-secondary">{host.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
