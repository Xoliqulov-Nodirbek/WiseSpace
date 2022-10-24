import styles from "../../styles/index.module.css";
import { Button, ButtonPlatform } from "../Button/Button";

export const Unversity = () => {
  return (
    <section className="bg-unversity-image bg-no-repeat bg-cover mt-20">
      <div className={`${styles.bgUnver} bg-unversityBg w-full pt-40 pb-[305px]`}>
        <div className={`${styles.container}`}>
          <h1 className="text-btnColor font-montserrat font-bold text-4xl tracking-[0.8px]">
            WiseSpace <span className="text-white">for</span>{" "}
            <span className="text-white">Unversity</span>
          </h1>
          <p className="text-white font-montserrat font-normal text-xl leading-8 tracking-[0.8px] max-w-[700px] w-full my-5">
            Learning Management System WiseSpace is a powerful and efficient
            online platform that adapts to the purpose of your educational
            organization. The system is easy to use, saves valuable time of
            adminstration staff, teachers and learners by automating the
            learning process.
          </p>
          <div className="flex space-x-5">
            <Button />
            <ButtonPlatform />
          </div>
        </div>
      </div>
    </section>
  );
};
