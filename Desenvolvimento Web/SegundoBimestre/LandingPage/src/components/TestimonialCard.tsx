import Star from "../assets/star.svg";
import StarOuter from "../assets/starOuter.svg";

interface ITestimonialCardProps {
    image: string;
    text: string;
    stars: number;
    name: string;
    role: string;
}

export default function TestimonialCard({ image, text, stars, name, role }: ITestimonialCardProps) {
    return (
        <div className="carousel-card">
            <img src={image} alt={`Foto de ${name}`} />
            <span className="testimony">
                <p>{text}</p>
            </span>
            <span className="rating">
                {Array.from({ length: 5 }, (_, index) =>
                    index < stars ? (
                        <img key={index} src={Star} alt="ícone estrela" width={22} height={20} />
                    ) : (
                        <img key={index} src={StarOuter} alt="ícone estrela sem fundo" width={20} height={22} />
                    )
                )}
            </span>
            <span className="names">
                <p>{name}</p>
                <p>{role}</p>
            </span>
        </div>
    )
}