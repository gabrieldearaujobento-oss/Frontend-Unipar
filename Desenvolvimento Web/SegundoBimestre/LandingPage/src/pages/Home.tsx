import { useEffect, useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import Champion from "../assets/champion.svg";
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import "../styles/utility.css";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/solution.css";
import TestimonialCard from "../components/TestimonialCard";
import ProfileImageOne from "../assets/images/profileOne.png";
import ProfileImageTwo from "../assets/images/profileTwo.png";
import "../styles/testimonials.css";

const testimonials = [
    {
        image: ProfileImageTwo,
        text: "Certamente o mercado chinês de eletricos está bombando, só existe uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.",
        stars: 4,
        name: "Ellon Musk",
        role: "CEO BING CHILLING",
    },
    {
        image: ProfileImageOne,
        text: "Comida caseira de verdade, chega quentinha e no horário. Já virei cliente fiel.",
        stars: 5,
        name: "Carlos Souza",
        role: "Nutricionista",
    },
    {
        image: ProfileImageOne,
        text: "Ótima opção para quem não tem tempo de cozinhar durante a semana.",
        stars: 4,
        name: "João Lima",
        role: "Empresário",
    },
];

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);

    return (
        <>
            {/* PARTE 2 - HEADER */}
            <header className="main-header">
                <div className="container py-sm">
                    <nav className="flex items-center justify-between">
                        <img src={Logo} alt="Logo DonaFrost" width={220} height={80} />

                        <div className="desktop-only">
                            <ul className="flex gap-1">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#solution">Soluções</a>
                                </li>
                                <li>
                                    <a href="#testimonials">Depoimentos</a>
                                </li>
                                <li>
                                    <a href="#pricing">Preços</a>
                                </li>
                                <li>
                                    <a href="#contact">Contato</a>
                                </li>
                            </ul>
                        </div>

                        <div className="desktop-only">
                            <div className="flex items-center">
                                <a className="reverse-color ml-lg" href="#">Login</a>
                                <Button text="Cadastre-se" />
                            </div>
                        </div>

                        <div className="mobile-menu">
                            {showMobileMenu ?
                                <div className="mobile-menu-content">
                                    <div className="container flex">
                                        <ul>
                                            <li>
                                                <a onClick={() => setShowMobileMenu(false)} href="#">Home</a>
                                            </li>
                                            <li>
                                                <a onClick={() => setShowMobileMenu(false)} href="#solution">Soluções</a>
                                            </li>
                                            <li>
                                                <a onClick={() => setShowMobileMenu(false)} href="#testimonials">Depoimentos</a>
                                            </li>
                                            <li>
                                                <a onClick={() => setShowMobileMenu(false)} href="#pricing">Preços</a>
                                            </li>
                                            <li>
                                                <a onClick={() => setShowMobileMenu(false)} href="#contact">Contato</a>
                                            </li>
                                            <li>
                                                <a className="reverse-color" onClick={() => setShowMobileMenu(false)} href="#">Login</a>
                                            </li>
                                        </ul>
                                        <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                            <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                        </span>
                                    </div>
                                </div>
                                :
                                <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                    <img src={Menu} alt="ícone menu" width={24} height={24} />
                                </span>
                            }
                        </div>
                    </nav>
                </div>
            </header>

            {/* PARTE 3 - HERO */}
            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retângulo dois tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retângulo um tela inicial" />
                <div className="container content">
                    <p className="desktop-only">
                        Olá
                    </p>
                    <h1>Comida de mãe direto no seu apê, é só pedir que entregamos para você!</h1>
                    <p>
                        Já pensou em matar a saudade daquela comida caseira? O melhor de tudo, nossas receitas são 100% saudáveis, bora entrar no shape.
                    </p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>

            {/* PARTE 4 - SOLUTIONS */}
            <section className="container" id="solution">
                <header>
                    <span>
                        <h2>Soluções</h2>
                        <span className="desktop-only">
                            <h2>
                                Sob medida para você
                            </h2>
                        </span>
                    </span>
                    <p>
                        Inovação é com a gente! A <strong>DonaFrost </strong>
                        já conquistou diversos clientes, seja você mais um deles,
                        veja tudo que pode ganhar com nossos serviços.
                    </p>
                </header>

                <section className="even-columns">
                    <Card
                        icon={Champion}
                        alt="ícone campeão"
                        title="Produto Vencedor"
                        text="Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage."
                    />
                </section>
            </section>

            {/* PARTE 5 - TESTIMONIALS */}
            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">
                            Conselho de quem conhece
                        </p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>
                        Quem já pediu sabe da qualidade das nossas receitas, estamos tirando aquela ideia de que
                        comida congelada tem de ser algo sem gosto, acompanhe abaixo os testemunhos de quem já comprou e aprovou.
                    </p>
                </header>

                <section className="carousel">
                    <div className="carousel-content">
                        {testimonials.map((item, index) => (
                            <TestimonialCard key={index} {...item} />
                        ))}
                    </div>
                    <div className="carousel-content">
                        {testimonials.map((item, index) => (
                            <TestimonialCard key={index} {...item} />
                        ))}
                    </div>
                </section>
            </section>
        </>
    )
}