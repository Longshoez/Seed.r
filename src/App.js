import logo from './logo.svg';
import './App.css';
import {Header} from './Components/Header/Header';

function App() {

  const users = [
    {
      id: '12312515ajsfbaoa4',
      name: "Gabriel alejandro",
      username: "Colima con flores 🌸",
      handle: "colima_con_flores",
      pic: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      bio: "Something some some some some some some some some some some some some some some some some",
      socials: [
        {network: 'Instagram', handle:'@col_con_flores', link:'https:something.com'},
        {network: 'Twitter', handle:'@col_con_flores', link:'https:something.com'},
        {network: 'TikTok', handle:'@col_con_flores', link:'https:something.com'},
        {network: 'Facebook', handle:'@col_con_flores', link:'https:something.com'},
        {network: 'Snapchat', handle:'@col_con_flores', link:'https:something.com'},
        {network: 'Whatsapp', handle:'@col_con_flores', link:'https:something.com'},
      ],
      posts:[
        { 
          title: "something",
          postImage: 'https.com',
          description: 'something something',
          post_likes: 10,
        }
      ],
      pattern: 'waves',
      background_color: '#FFEEB3',
      event:{
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
        {network: 'Instagram', handle:'@col_con_flores', link:'https:something.com'},
        {network: 'Twitter', handle:'@col_con_flores', link:'https:something.com'},
        {network: 'TikTok', handle:'@col_con_flores', link:'https:something.com'},
        {network: 'Facebook', handle:'@col_con_flores', link:'https:something.com'},
        {network: 'Snapchat', handle:'@col_con_flores', link:'https:something.com'},
        {network: 'Whatsapp', handle:'@col_con_flores', link:'https:something.com'},
      ],
      posts:[
        { 
          title: "something",
          postImage: 'https.com',
          description: 'something something',
          post_likes: 10,
        }
      ],
      pattern: 'waves',
      background_color: 'yellow',
      event:{}
    }
  ]

  console.log(users)
//users[0].id === '12312515ajsfbaoa4'? 
//i cant iterate throug all the users from the db, i must get this data from the url
  return (        
    users[0].id === '12312515ajsfbaoa4' ? 
      <div className="App">        
        {/* pic, username, myseed handle, bio*/}
        <Header 
          pic={users[0].pic} 
          username={users[0].username} 
          handle={users[0].handle} 
          bio={users[0].bio} 
          pattern={users[0].pattern} 
          bg_color={users[0].background_color}/>
                
        {/* an object that contains the name, handle and the link*/}
        {/* <Socials networks={user.socials}/> */}
        {/* { user.event && <Event event={user.event}/>}                    */}     
      </div>
    : 
      <h1>
        page not found component
      </h1>        
  );
}

export default App;