import { v4 as uuidv4 } from "uuid";

import {CartList, Cart} from '../../components/Cart';

export const AboutPage = () => {
  const data = [
    {
      name: 'Jane Doe',
      position: 'CEO & Founder',
      about: 'Some text that describes me lorem ipsum ipsum lorem.',
      email: 'jane@example.com',
      src: 'https://www.w3schools.com/w3images/team1.jpg'
    },
    {
      name: 'Mike Ross',
      position: 'Art Director',
      about: 'Some text that describes me lorem ipsum ipsum lorem.',
      email: 'mike@example.com',
      src: 'https://www.w3schools.com/w3images/team2.jpg'
    },
    {
      name: 'John Doe',
      position: 'Designer',
      about: 'Some text that describes me lorem ipsum ipsum lorem.',
      email: 'john@example.com',
      src: 'https://www.w3schools.com/w3images/team3.jpg'
    },
  ];
  return (
    <>
      <section className="p-10 text-xl text-white text-center bg-slate-700">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
      </section>

      <section>
        <h1 className=" my-3 text-3xl text-center font-bold">OUR TEAM</h1>
        <CartList>
          {data.map((item) => (
            <Cart item={item} key={uuidv4()}/>
            ))}
        </CartList>
      </section>

      <section className="p-10 text-xl text-white bg-slate-700">
        <h1 className="text-center">Our goals</h1>
        <ul>
          <li>Goal 1 </li>
          <li>Goal 2 </li>
          <li>Goal 3 </li>
        </ul>
      </section>
    </>
  )
}
