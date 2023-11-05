import React, { useState } from "react";
import "./FilterBox.css";
import mag_glass from "./magnifying-glass.png";

function FilterBox(props) {
  const [displayFilter, setDisplayFilter] = useState(false);

  function filterFunction() {
    if (displayFilter === false) {
      setDisplayFilter(true);
    } else {
      setDisplayFilter(false);
      props.clearFilter();
    }
  }
  function filterArray(event) {
    const kundeSearch = event.target.value;
    const strippedKundeSearch = kundeSearch.replaceAll(" ", "");

    const filteredAuftrag = props.toFilter.filter((kunden) =>
      kunden.kunde
        .toLowerCase()
        .replaceAll(" ", "")
        .includes(strippedKundeSearch.toLowerCase())
    );
    props.fromFilter(filteredAuftrag);
  }
  function filterArrayAufgabe(event) {
    const aufgabeSearch = event.target.value;
    const strippedAufgabeSearch = aufgabeSearch.replaceAll(" ", "");

    const filteredAuftrag = props.toFilter.filter((projekts) =>
      projekts.projekt
        .toLowerCase()
        .replaceAll(" ", "")
        .includes(strippedAufgabeSearch.toLowerCase())
    );
    props.fromFilter(filteredAuftrag);
  }

  return (
    <section >
      <div>
        <button
          label="filter"
          className="filter_button"
          onClick={filterFunction}
        >
          <img
            className="mag_glass"
            src={mag_glass}
            height="15rem"
            width="15rem"
          />
          Filter
        </button>
      </div>
      <div>
        {displayFilter && (
          <div className="search_box_background">
            <ul>
              <li>
                <label className="searchBox">
                  Kunde:
                  <input
                    className="searchBox"
                    type="search"
                    onChange={filterArray}
                    placeholder="suchen Kunde"
                  />
                </label>
              </li>
              <li>
                <label>
                  Aufgabe:
                  <input
                    className="searchBox"
                    type="search"
                    placeholder="suchen Aufgabe"
                    onChange={filterArrayAufgabe}
                  />
                </label>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default FilterBox;
