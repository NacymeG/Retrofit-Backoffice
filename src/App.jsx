import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import authProvider from './authProvider';

import CarsList from './components/Cars/List';
import CarsEdit from './components/Cars/Edit';
import CarsPost from './components/Cars/Post';
import NewsList from './components/News/List';
import NewsEdit from './components/News/Edit';
import NewsPost from './components/News/Post';
import TeamList from './components/Team/List';
import TeamEdit from './components/Team/Edit';
import TeamPost from './components/Team/Post';
import ReviewList from './components/Review/List';
import ReviewEdit from './components/Review/Edit';
import ReviewPost from './components/Review/Post';
import MapList from './components/Map/List';
import MapEdit from './components/Map/Edit';
import MapPost from './components/Map/Post';

function App() {
  return (
    <div className="App">
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource
          name="cars"
          list={CarsList}
          edit={CarsEdit}
          create={CarsPost}
        />
        <Resource
          name="news"
          list={NewsList}
          edit={NewsEdit}
          create={NewsPost}
        />
        <Resource
          name="team"
          list={TeamList}
          edit={TeamEdit}
          create={TeamPost}
        />
        <Resource
          name="review"
          list={ReviewList}
          edit={ReviewEdit}
          create={ReviewPost}
        />
         <Resource
          name="localisation"
          list={MapList}
          edit={MapEdit}
          create={MapPost}
        />
      </Admin>
    </div>
  );
}
// aaa
export default App;
