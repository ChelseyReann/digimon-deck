import React from 'react'
import Search from '../components/Search'
import '../components/Sets/Search/Search.css'
import { useState, useEffect } from 'react'
export default function SearchPage() {
  return (
    <div><Search cards={cards}/></div>
  )
}
