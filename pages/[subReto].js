import Link from "next/link";
import elements from "../elements";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
export default function subReto() {
  const router = useRouter();
  const retos = [];
  let total;
  const subRetoName = router.query.subReto;
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  if (
    elements.map((item) => {
      item.map((it) => {
        console.log(it.AREA);
      });
    })
  )
    elements.map((ele) => {
      console.log(ele);
      total = ele.filter(function (el) {
        return el.AREA === "MARKETING";
      });
      // ele.map(e => {
      //   console.log(e)
      // total = e.filter(e => e.AREA === 'MARKETING')
      // })
    });
  console.log(total);
  elements[0].map((item) => {
    retos.push(item.RETO);
  });
  const reto = retos.filter(onlyUnique);
  console.log(reto);
  return (
    <div className="bg-secondary h-screen w-screen p-4">
      <Link href="/">
        <div className={styles.header} className="cursor-pointer">
          <div className={styles.logo}>
            Posible<span className={styles.logoDot}>.</span>
          </div>
        </div>
      </Link>
      <div className="pt-10">
        <h1 className="text-4xl font-medium text-center">
          {router.query.subReto}
        </h1>
      </div>
      <div className="grid grid-flow-row grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-4 mt-10 px-40">
        {reto.map((element) => {
          return (
            <Link href={"/" + element}>
              <div className="bg-white p-5 rounded-lg h-full w-40 m-auto lg:h-48 lg:w-80 lg:pt-16 cursor-pointer">
                {/* <img src={element[0].image} className="m-auto" />
                <br /> */}
                <h3 className="text-center font-medium text-2xl">{element}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
