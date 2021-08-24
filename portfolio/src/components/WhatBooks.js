import React, { useState } from 'react';
import "../css/whatbooks.css";

// images
import Barthelme from '../images/barthelme-stories.jpg'
import Zaitoun from '../images/zaitoun.jpg'
import Shipton from '../images/shipton_jazz.jpg'
import DesignPatterns from '../images/javascript-design-patterns.jpg'

export default function WhatBooks() {

    const [bookFocus, setBookFocus] = useState({});

    let books = [
        {
            title: "Collected Stories",
            author: "Donald Barthelme",
            year: 2021,
            publisher: "The Library of America",
            image: Barthelme,
            blurb: "With the recent release of this collection, I'm finally able to return all of the books of Barthelme's stories that I'd been hoarding from the Chicago Public Library once they did away with late fees. These stories always leave me wanting more, thankfully there's at least a hundred of them in this collection. Barthelme never ceases to inspire in language, humor, and creativity."
        },
        {
            title: "Zaitoun: Reciples from the Palestinian Kitchen",
            author: "Yasmin Khan",
            year: 2019,
            publisher: "Norton",
            image: Zaitoun,
            blurb: "Abundant summer tomatoes had me craving tabouleh several weeks back and I've yet to put this back on the shelf."
        },
        {
            title: "A New History Of Jazz",
            author: "Alyn Shipton",
            year: 2001,
            publisher: "Continuum",
            image: Shipton,
            blurb: "I picked this up in anticipation of an upcoming trip to New Orleans, but if anything it's exposed how shallow my knowledge of Chicago's jazz history is. Already endlessly rewarding, I'm excited to let this influence my listening habits for the next six months."
        },
        {
            title: "Learning JavaScript Design Patterns",
            author: "Addy Osmani",
            year: 2020,
            publisher: "O'Reilly",
            image: DesignPatterns,
            blurb: "I've only just recently started getting my hands dirty with O'Reilly books and I wish I'd done so much earlier rather than relying on Youtube. While I've yet to incorporate a lot of the patterns in here, it's certainly got me thinking a lot more about how and why I write code the way I do and how I can build better habits in terms of organization and coherence."
        }]

    const bookClick = (e, book) => {
        // let cards = document.querySelectorAll(".book-card.initial")
        // for (let i = 0; i < cards.length; i++) {
        //     cards[i].className = ".book-card-side"
        // }
    }

    const makeBooks = (arr) => {
        let books = []
        for (let i = 0; i < arr.length; i++) {
            books.push(arr[i])
        }
        return books.map(book => 
        
        <div 
            className={book.title === bookFocus.title ? "book-card-hide" : (bookFocus.title ? "book-card-side" :"book-card-initial")}
            onClick={(e) => {
                bookClick(e)
                setBookFocus({...book})
            }}>
                <img src={book.image} className="book-img"/>
            </div>)

    }


    return (
        <div className="misc-div" id="what-books">
            <a name="whatbooks"/>
            <span className="what-books-logo">what I'm reading as of 8/24/21:</span>
            <div id="what-books-row">
                <div id={bookFocus.title ? "what-books-col-left" : "what-books-col-left-initial"}>
                    {makeBooks(books)}
                </div>
                {bookFocus.title ?
                <div id="what-books-col-right">
                    <div id="book-details">


                    <span id="book-author">{bookFocus.author}</span>
                    <span id="book-title">{bookFocus.title}</span> 
                    <span id="publ-date">{bookFocus.publisher} {bookFocus.year}</span>
                    <span id="book-blurb">{bookFocus.blurb}</span>
                    </div>
                    <div id="book-main-img"><img src={bookFocus.image}/></div>
                </div> : null}
            </div>
        </div>
    )
}