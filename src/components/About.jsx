import AboutImg from "../assets/AboutImage.png";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className=" mx-auto max-w-7xl px-8 pt-32 " id="about">
      <SectionTitle text="About" />
      <div className=" mx-auto max-w-6xl m-12 p-8 grid  gap-6 md:grid-cols-2 items-center shadow-xl shadow-slate-600">
        <div>
          <p className="text-lg text-slate-200">
            I am a passionate front-end web developer with strong skills in
            design and problem-solving. I am a learner and explorer constantly
            seeking better quality, efficiency, and a healthy environment and I
            enjoy problem-solving and learning from the challenges that comes
            along. I strive to create visually appealing and interactive user
            interfaces. With a disciplined approach, I excel in writing clean
            code and optimizing performance. I am adept at collaborating in team
            environments.
          </p>
        </div>
        <article>
          <img src={AboutImg}  />
        </article>
      </div>
    </section>
  );
};

export default About;
