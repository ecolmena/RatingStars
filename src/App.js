import React, {useState} from "react";

import colorData from "./color-data.json";
import ColorList from "./ColorList";
import StarRating from "./StarRating";
import AddColorForm from "./AddColorForm";
import { v4 } from "uuid";

export default function App() {
  const [colors, setColors] = useState(colorData);


  return (
    <div>
      <ColorList
      colors={colors}
      onRemoveColor={id => {
      const newColors = colors.filter(color => color.id !== id);
      setColors(newColors);
      }}
      />

      <StarRating
      style={{ backgroundColor: "lightblue" }}
      onDoubleClick={e => alert("double click")}/>

      <AddColorForm 
      onNewColor={(title, color) => {
        const newColors = [
        ...colors,
        {
        id: v4(),
        rating: 0,
        title,
        color
        }
        ];
        setColors(newColors);
        }}/>

    </div>

    
  );
}
