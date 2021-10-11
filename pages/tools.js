import Link from "next/link";
import styles from "../styles/Home.module.css";
import elements from "../elements";
export default function Tools() {
  return (
    <main className="bg-secondary h-screen w-screen p-4">
      <Link href="/" >
        <div className={styles.header} className="cursor-pointer">
          <div className={styles.logo}>
            Posible<span className={styles.logoDot}>.</span>
          </div>
        </div>
      </Link>
      <div className="pt-10">
        <h1 className="text-4xl font-medium text-center">
          ¿Qué quieres mejorar en tu negocio?
        </h1>
      </div>
      <div className="grid grid-flow-row grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-4 mt-10 lg:px-40">
        {elements.map((element) => {
          return (
            <Link href={"/" + element[0].AREA}>
              <div className="bg-white p-5 rounded-lg h-full w-40 m-auto lg:h-48 lg:w-80 lg:pt-12 cursor-pointer">
                <img src={element[0].image} className="m-auto" />
                <br />
                <h3 className="text-center font-medium">{element[0].AREA}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
