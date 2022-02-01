/* eslint-disable tailwindcss/no-custom-classname */
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="p-2 text-3xl font-bold underline md:p-3 md:text-5xl text-primary-900 foo">
        Hello world!
      </h1>
      <a href="#" className="text-2xl">
        test
      </a>

      <div className="w-[600px] bg-green-400 aspect-10/3">ボックス</div>

      <div className="mx-auto prose prose-sm">
        <h1>タイトル</h1>
        <p className="line-clamp-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          unde, aut hic excepturi dolores magnam illo harum quo quas possimus
          officiis fugit sint nostrum! Aperiam iure sint accusamus itaque
          libero.
        </p>
        <ul>
          <li>foo 1</li>
          <li>foo 2</li>
          <li>foo 3</li>
          <li>foo 4</li>
          <li>foo 5</li>
        </ul>
        <code>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          nesciunt tempora perspiciatis, minima debitis sint! Veritatis autem
          maiores amet repellat doloremque obcaecati at, cum laboriosam quidem
          quae. Ullam, molestiae deserunt.
        </code>
      </div>
    </div>
  );
};

export default Home;