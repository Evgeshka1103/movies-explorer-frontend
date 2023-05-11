import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section id="about-project" className="about__project">
      <div className="about__project_container">
        <h2 className="about__title">О проекте</h2>
        <div className="about__title_line"></div>
        <div className="about__project_blocks">
          <div className="about__project_description">
            <div className="about__project_block">
              <h3 className="about__project_title" >
                Дипломный проект включал 5 этапов
              </h3>
              <p className="about__project_text">
                Составление плана, работу над бэкендом, вёрстку, добавление
                функциональности и финальные доработки.
              </p>
            </div>
            <div className="about__project_block">
              <h3 className="about__project_title">
                На выполнение диплома ушло 5 недель
              </h3>
              <p className="about__project_text">
                У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                соблюдать, чтобы успешно защититься.
              </p>
            </div>
          </div>
          <div className="about__project_plan">
            <p className="about__plan_time-black">1 неделя</p>
            <p className="about__plan_time-grey">4 недели</p>

            <p className="about__plan_parent">Back-end</p>
            <p className="about__plan_parent">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}