import React, { useEffect, useState } from "react";
import { DefaultPage } from "./_layouts/DefaultPage";

import Main from "../components/HtmlCommon/Main";
import Cards from "../components/Card/Cards";

import api from '../services/api'

export const Home = () => {

  const [cards, setCards] = useState(null)

  useEffect(() => {
    async function loadCharacters() {
      const res = await api.get(`/characters`);
      setCards(res.data.data);
    }

    loadCharacters();
  }, []);

  if (!cards || !cards.length) return <div></div>

  const data = cards.map(x => ({
    id: x.id,
    image: x.attributes.image.original,
    title: x.attributes.canonicalName,
    description: x.attributes.description,
    otherNames: x.attributes.otherNames
  }))

  return (
    <DefaultPage>
      <Main>
        {<Cards data={data} />}
      </Main>
    </DefaultPage>
  )
};