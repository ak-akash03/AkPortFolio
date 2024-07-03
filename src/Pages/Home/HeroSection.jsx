export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Akash</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">FULL STACK</span>{" "}
            <br />
            DEVELOPER
          </h1>
          <p className="hero--section-description">
          Hello, I'm Akash Rathod, a BCA student at AIM. I'm passionate about hacking and programming. Eager to apply my skills in real-world scenarios, I thrive on staying updated with the latest in cybersecurity. Let's connect and explore the exciting possibilities ahead!
          </p>
        </div>
        <div className="btn-c">
        <a target="_black" href="https://drive.google.com/uc?export=download&id=1P-jw3MsDGSbaFL-VE8nBlI1FV39GLDiS" className="btn btn-primary">GET MY RESUME</a>
        <a target="_black" href="https://ak-akash03.github.io/editinglabproject/" className="btn btn-primary">GO-TO AK CREATION</a>
     
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
