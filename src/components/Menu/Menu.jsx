import './Menu.scss'

export default function Menu({menueOpen,setMenueOpen}) {
  return (
    <div className={"Menu " + (menueOpen && "active")} id='Menu'>
        <ul><li onClick={()=>setMenueOpen(false)}><a href='#Intro'>Profile</a></li></ul>
        <ul><li onClick={()=>setMenueOpen(false)}><a href='#Portofolio'>Portofolio</a></li></ul>
        <ul><li onClick={()=>setMenueOpen(false)}><a href='#Works'>Projects</a></li></ul>
        <ul><li onClick={()=>setMenueOpen(false)}><a href='#Testimonials'>Testimonials</a></li></ul>
        <ul><li onClick={()=>setMenueOpen(false)}><a href='#Contact'>Contact</a></li></ul>
    </div>
  )
}
