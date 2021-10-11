import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div className="font-sans bg-landing">
      <Head>
        <title>Herramientas para emprendedores</title>
        <meta
          name="description"
          content="Comienza a digitalizar tu negocio con herramientas gratuitas"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins"
          rel="stylesheet"
        ></link>
      </Head>
      <div className={styles.bgLanding}>
        <main className="min-h-screen w-screen text-white p-4 pl-28">
          <Link href="/">
            <div className={styles.header}>
              <div className={styles.logo}>
                Posible<span className={styles.logoDot}>.</span>
              </div>
            </div>
          </Link>
          <div className="items-center pt-8 lg:pt-40 font-medium lg:w-3/6">
            <h1 className="flex-1 lg:text-left text-center lg:text-7xl text-5xl">
              Comienza a digitalizar tu negocio con herramientas gratuitas
            </h1>
            <br />
            <br />
          </div>
          <Link href="/tools">
            <div className="flex justify-center lg:justify-start">
              <div className="bg-third cursor-pointer px-3 py-3 w-52 rounded-lg text-xl text-center">
                ¡Encuéntralas aquí!
              </div>
            </div>
          </Link>
        </main>
      </div>

      {/* <div className="px-10">
        <div className="flex text-2xl h-96 items-center m-auto">
          <div className="text-center flex-1 px-5">
            <div className="m-auto">
              <Image width={70} height={70} src="/first.svg" />
            </div>
            Sé más eficiente con la gestión de tu negocio y ahorra tiempo.
          </div>
          <br />
          <div className="text-center flex-1 px-5">
            <div className="m-auto">
              <Image width={70} height={70} src="/second.svg" />
            </div>
            Accede a +100 herramientas gratuitas en un solo lugar.
          </div>
          <br />
          <div className="text-center flex-1 px-5">
            <div className="m-auto">
              <Image width={70} height={70} src="/third.svg" />
            </div>
            Te recomendamos herramientas según el tema que quieras mejorar.
          </div>
          <br />
        </div>
      </div> */}
      <div className="text-white">
        <h3 className="text-5xl font-medium text-center p-5 pt-20">
          ¿Cómo funciona?
        </h3>
        <div className="px-10 mx-16">
          <div className="pt-20">
            <div className="flex">
              <div className="flex-initial text-9xl text-right text-gray-600 font-semibold pr-10">
                01
              </div>
              <div className="flex-initial my-auto">
                <div className="flex items-center">
                  <hr className="bg-third w-10 h-0.5 border-none mr-2"></hr>{" "}
                  <span className={styles.textThird}>PRIMERO</span>
                </div>
                <div className="text-4xl pr-20 w-5/6">
                  Identifica el área de negocio que quieres digitalizar
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="pt-20">
            <div className="flex">
              <div className="flex-initial text-9xl text-right text-gray-600 font-semibold pr-10">
                02
              </div>
              <div className="flex-initial my-auto">
                <div className="flex items-center">
                  <hr className="bg-third w-10 h-0.5 border-none mr-2"></hr>{" "}
                  <span className={styles.textThird}>SEGUNDO</span>
                </div>
                <div className="text-4xl pr-20 w-5/6">
                  Selecciona el reto que tienes actualmente en tu negocio
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="pt-20">
            <div className="flex">
              <div className="flex-initial text-9xl text-right text-gray-600 font-semibold pr-10">
                03
              </div>
              <div className="flex-initial my-auto">
                <div className="flex items-center">
                  <hr className="bg-third w-10 h-0.5 border-none mr-2"></hr>{" "}
                  <span className={styles.textThird}>TERCERO</span>
                </div>
                <div className="text-4xl pr-20 w-5/6">
                  Identifica las herramientas que te ayudarán a resolveras e
                  ¡impleméntalas!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full p-4 text-white mt-20">
        <div className="w-full">
          <div className="text-center">
            <h4 className="text-5xl">
              Selecciona el área que quieres digitalizar
            </h4>
          </div>
          <br />
          <div className="flex justify-center mt-10">
            <div className="w-44 mx-10">
              <div className="flex cursor-pointer">
                <span className="text-md mr-5">-</span>Marketing
                <img src="/arrow-down.svg" className="px-5 h-2 m-auto" />
                <img src="/arrow-up.svg" className="hidden" />
              </div>
              <div>
                <div className="my-5">Mejora tu contenido</div>
                <div className="my-5">Mejora la comunicación y atención al cliente</div>
                <div className="my-5">Conoce a tu mercado</div>
              </div>
            </div>
            <br />
            <div className="w-44 mx-10">
              <div className="flex cursor-pointer">
                <span className="text-md mr-5">-</span>Operaciones
                <img src="/arrow-down.svg" className="px-5 h-2 m-auto" />
                <img src="/arrow-up.svg" className="hidden" />
              </div>
              <div>
                <div className="my-5">Arma los procesos de tu negocio</div>
              </div>
            </div>
            <br />
            <div className="w-44 mx-10">
              <div className="flex cursor-pointer">
                <span className="text-md mr-5">-</span>Tech
                <img src="/arrow-down.svg" className="px-5 h-2 m-auto" />
                <img src="/arrow-up.svg" className="hidden" />
              </div>
              <div>
                <div className="my-5">Contrata talento</div>
              </div>
            </div>
            <br />
            <div className="w-44 mx-10">
              <div className="flex cursor-pointer">
                <span className="text-md mr-5">-</span>Talento
                <img src="/arrow-down.svg" className="px-5 h-2 m-auto" />
                <img src="/arrow-up.svg" className="hidden" />
              </div>
              <div>
                <div className="my-5">Crea la web de tu negocio</div>
              </div>
            </div>
          </div>
          <div>
            {/* <div>
              <h3>Todos los retos</h3>
            </div> */}
            <br />
            <div className="flex grid grid-flow-row grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-8 mx-40">
              <div className="border-solid border-2 border-white p-5 pb-10 rounded-3xl m-auto h-full">
                <img src="/rrss.svg" />
                <h3 className="pt-10 text-xl text-center">
                  Crea contenido para redes sociales{" "}
                </h3>
              </div>
              <div className="border-solid border-2 border-white p-5 pb-10 rounded-3xl m-auto h-full">
                <img src="/process.svg" />
                <h3 className="pt-10 text-xl text-center">
                Arma tus procesos de trabajo
                </h3>
              </div>
              <div className="border-solid border-2 border-white p-5 pb-10 rounded-3xl m-auto h-full">
                <img src="/web.svg" />
                <h3 className="pt-10 text-xl text-center">
                Crea la web de tu negocio
                </h3>
              </div>
              <div className="border-solid border-2 border-white p-5 pb-10 rounded-3xl m-auto h-full">
                <img src="/clients.svg" />
                <h3 className="pt-10 text-xl text-center">
                Conoce más a tus clientes y competidores
                </h3>
              </div>
              <div className="border-solid border-2 border-white p-5 pb-10 rounded-3xl m-auto h-full">
                <img src="/talent.svg" />
                <h3 className="pt-10 text-xl text-center">
                Contrata talento
                </h3>
              </div>
              <div className="border-solid border-2 border-white p-5 pb-10 rounded-3xl m-auto h-full">
                <img src="/comunication.svg" />
                <h3 className="pt-10 text-xl text-center">
                Comunícate con tus clientes rápido y fácil
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
