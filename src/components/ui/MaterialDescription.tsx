interface Material {
  image: string;
  alt: string;
  title: string;
  description: string;
}

interface MaterialDescriptionProps {
  materials: Material[];
}

export function MaterialDescription({ materials }: MaterialDescriptionProps) {
  return (
    <div className="flex flex-col gap-4">
      {materials.map((material) => (
        <div key={material.title} className="flex items-start gap-4">
          <img
            src={material.image}
            alt={material.alt}
            className="w-24 h-24 object-cover rounded-sm border border-border shrink-0"
          />
          <div>
            <h4 className="text-sm font-semibold">{material.title}</h4>
            <p className="mt-1 text-sm leading-relaxed text-text-muted">
              {material.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
