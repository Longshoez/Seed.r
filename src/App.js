import logo from './logo.svg';
import './App.css';
import { UserCard } from './Components/UserCard/UserCard';
import { ContentWrapper } from './Components/ContentWrapper/ContentWrapper';
import { ClickableComponent as Button } from './Components/ClickableComponent/ClickableComponent';
import { FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';
import { Background } from './Components/Background/Background';
import { Post } from './Components/Post/Post';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  //store in zustland
  const [color, setColor] = useState(users[0].background_color)
  const [pattern, setPattern] = useState(users[0].pattern)

  useEffect(() => {
    console.log(color)
  }, [color])

  console.log(users)
  //users[0].id === '12312515ajsfbaoa4'?
  //i cant iterate throug all the users from the db, i must get this data from the url
  return (
    <div className='app' style={{ backgroundColor: `${color}` }}>
      <UserCard pic={users[0].pic} username={users[0].name} handle={users[0].handle} bio={users[0].bio} setColor={setColor} color={color} />
      <div className="mainContent">
        <ContentWrapper header={'Redes Sociales'}>
          {/**make the icon selecction a conditional switch based on the social network name */}
          <Button header={users[0].socials[0].handle} children={<FaInstagram />} edata={users[0].socials[0].followers} color={'#F0E3B5'} />
          <Button header={users[0].socials[1].handle} children={<FaTwitter />} edata={users[0].socials[1].followers} color={'#C1CFF3'} />
          <Button header={users[0].socials[2].handle} children={<FaTiktok />} edata={users[0].socials[2].followers} color={'#F2B4B4'} />
        </ContentWrapper>

        <ContentWrapper header={'Ultimos Posts'}>
          <Post picture={users[0].pic} title={users[0].posts[0].title} handle={users[0].handle} description={users[0].posts[0].description} likes={users[0].posts[0].post_likes} />
        </ContentWrapper>

        <ContentWrapper header={'Redes Sociales'}>
          <Button header={'Instagram'} children={<FaInstagram />} edata={'50k+ followers'} color={'#F0E3B5'} />
          <Button header={'Twitter'} children={<FaTwitter />} edata={'50k+ followers'} color={'#C1CFF3'} />
          <Button header={'TikTok'} children={<FaTiktok />} edata={'50k+ followers'} color={'#F2B4B4'} />
        </ContentWrapper>

        <ContentWrapper header={'Redes Sociales'}>
          <Button header={'Instagram'} children={<FaInstagram />} edata={'50k+ followers'} color={'#F0E3B5'} />
          <Button header={'Twitter'} children={<FaTwitter />} edata={'50k+ followers'} color={'#C1CFF3'} />
          <Button header={'TikTok'} children={<FaTiktok />} edata={'50k+ followers'} color={'#F2B4B4'} />
        </ContentWrapper>

        <ContentWrapper header={'Redes Sociales'}>
          <Button header={'Instagram'} children={<FaInstagram />} edata={'50k+ followers'} color={'#F0E3B5'} />
          <Button header={'Twitter'} children={<FaTwitter />} edata={'50k+ followers'} color={'#C1CFF3'} />
          <Button header={'TikTok'} children={<FaTiktok />} edata={'50k+ followers'} color={'#F2B4B4'} />
        </ContentWrapper>

      </div>

      <Background pattern={'wavy'} />
    </div>
  );
}

export default App;

const users = [
  {
    id: '12312515ajsfbaoa4',
    name: "Gabriel alejandro",
    username: "Colima con flores 🌸",
    handle: "colima_con_flores",
    pic: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    bio: "Something some some some some some some some some some some some some some some some some",
    socials: [
      { network: 'Instagram', handle: '@col_con_flores', link: 'https:something.com', followers: 50000 },
      { network: 'Twitter', handle: '@col_con_flores', link: 'https:something.com', followers: 13000 },
      { network: 'TikTok', handle: '@col_con_flores', link: 'https:something.com', followers: 135000 },
      { network: 'Facebook', handle: '@col_con_flores', link: 'https:something.com' },
      { network: 'Snapchat', handle: '@col_con_flores', link: 'https:something.com' },
      { network: 'Whatsapp', handle: '@col_con_flores', link: 'https:something.com' },
    ],
    posts: [
      {
        title: "something",
        postImage: 'https.com',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim officiis nulla nostrum! Consectetur, aperiam quos.',
        post_likes: 10,
      },
      {
        title: "something",
        postImage: 'https.com',
        description: 'something something',
        post_likes: 10,
      },
      {
        title: "something",
        postImage: 'https.com',
        description: 'something something',
        post_likes: 10,
      },
      {
        title: "something",
        postImage: 'https.com',
        description: 'something something',
        post_likes: 10,
      },
    ],
    pattern: 'waves',
    background_color: '#FFEEB3',
    event: {
      type: 'giveaway',
      name: 'Dell xps 15 2022 giveaway!',
      description: 'Win a brand new Dell XPS 15, just follow these steps, 1.- follow my account, 2.- like this post, 3.- tag a friend on this post',
      pic: 'https//www.something.com'
    }
  },
  {
    id: '12312515ajsfbaoa4',
    name: "Gabriel alejandro",
    username: "Colima con flores 🌸",
    pic: "Gabriel alejandro",
    bio: "Something some some some some some some some some some some some some some some some some",
    socials: [
      { network: 'Instagram', handle: '@col_con_flores', link: 'https:something.com' },
      { network: 'Twitter', handle: '@col_con_flores', link: 'https:something.com' },
      { network: 'TikTok', handle: '@col_con_flores', link: 'https:something.com' },
      { network: 'Facebook', handle: '@col_con_flores', link: 'https:something.com' },
      { network: 'Snapchat', handle: '@col_con_flores', link: 'https:something.com' },
      { network: 'Whatsapp', handle: '@col_con_flores', link: 'https:something.com' },
    ],
    posts: [
      {
        title: "something",
        postImage: 'https.com',
        description: 'something something',
        post_likes: 10,
      }
    ],
    pattern: 'waves',
    background_color: 'yellow',
    event: {}
  }
]
