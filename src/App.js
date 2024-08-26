import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import SearchBox from "./components/SearchBox";

// 1. On the left, contact info registration form.
// 2. On the Right, contact list and search box.
// 3. The user can add a name and phone number to the list.
// 4. The user can see the number of the list items.
// 5. The user can search items by names.
// 6. Search results will show by a letter.

function App() {
  return (
    <div className="container mx-auto mt-20 max-w-4xl rounded-3xl bg-slate-100 shadow-2xl">
      <h1 className="border-b-2 p-6 text-center text-4xl font-bold">
        Phone Book
      </h1>
      <section className="flex">
        <div className="left-section flex-1 border-r-2 p-6">
          <ContactForm />
        </div>
        <div className="right-section flex-1 p-6">
          <SearchBox />
          <ContactList />
        </div>
      </section>
    </div>
  );
}

export default App;
