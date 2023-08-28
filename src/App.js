import React from "react";

import NavBar from "./components/NavBar";
import JournalPost from "./components/JournalPost"; 
import data from "./data.js"

import './App.css'

export default function App() {

    const posts = data.map(item => (
        <JournalPost 
            key={item.id}
            {...item}
        />
    ));

    return(
        <div>
            <NavBar />
            <section>
                {posts}
            </section>
        </div>
    );
} 