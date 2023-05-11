function AppHeader(props){
  return(
    <header>
    <h1>{props.nm}</h1>
    <ul class="navmenu">
      {props.nav.map(el=>( <li><a href="#">{el.link}</a></li>))}
    </ul>
  </header>
  )
}
export default AppHeader
  