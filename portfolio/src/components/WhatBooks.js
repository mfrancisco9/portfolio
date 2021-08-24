import React, { useState } from 'react';
import "../css/whatbooks.css";

// images
// import Barthelme from '../images/barthelme-stories.jpg'
import Zaitoun from '../images/zaitoun.jpg'
import Shipton from '../images/shipton_jazz.jpg'
import DesignPatterns from '../images/javascript-design-patterns.jpg'

export default function WhatBooks() {

    let books = [
        {
            title: "Collected Stories",
            author: "Donald Barthelme",
            year: 2021,
            publisher: "The Library of America",
            image: null,
            blurb: "aloo"
        },
        {
            title: "Zaitoun: Reciples from the Palestinian Kitchen",
            author: "Yasmin Khan",
            year: 2019,
            publisher: "Norton",
            image: Zaitoun,
            blurb: "alooooo"
        },
        {
            title: "A New History Of Jazz",
            author: "Alyn Shipton",
            year: 2001,
            publisher: "Continuum",
            image: Shipton,
            blurb: "jazzoooo"
        },
        {
            title: "Learning JavaScript Design Patterns",
            author: "Addy Osmani",
            year: 2020,
            publisher: "O'Reilly",
            image: DesignPatterns,
            blurb: "javoooo"
        }]

    const makeBooks = (arr) => {
        let books = []
        for (let i = 0; i < arr.length; i++) {
            books.push(arr[i])
        }
        return books.map(book => <div className="book-card">{book}</div>)

    }


    return (
        <div className="misc-div" id="what-books">
            <div id="what-books-row">
                <div id="what-books-col-left">
                    {makeBooks(book)}
                </div>
                <div id="what-books-col-right"></div>
            </div>
        </div>
    )
}