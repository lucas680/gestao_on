import Head from "next/head";

interface Ihead{
  title?: string;
}

export default function HeadComponent(props: Ihead) {
  return (
    <Head>
      <title>{props.title ?? 'Gestão.E'}</title>
      <link rel="icon" href="/logoBlue.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
