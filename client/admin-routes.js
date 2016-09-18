import EventsAdmin from './containers/admin';
import EventsList from './containers/events';
import EventsAdd from './containers/admin/eventsAdd';

export default function (injectDeps, { configs }) {
  const routes = [
    {path: 'events', component: EventsAdmin, childRoutes:[]}
  ];

  const subMenu = configs.events.subMenu;
  const subMenuComponents = [
    EventsList,
    EventsAdd
  ];
  subMenu.map((menu, index) => {
    routes[0].childRoutes.push({
      path: menu.href,
      component: subMenuComponents[index]
    });
  });

  return routes;
}
