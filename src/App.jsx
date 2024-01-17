export default function App() {

  const ContactList = () =>{
    const components = ['name:','email:','phone:'];

    return(
    <>
    <h2>
      components.map ((component){"=>"}(
      <span ContactList = {component}>{component}</span>
      ))
      </h2>
    </>
    );
  };

  return(
    <>
      <ContactList />
    </>
  );
}