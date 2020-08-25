import React, { Component } from "react";

import { getPlants } from "../services/fakePlantService";
import { getCategories } from "../services/fakeCategoryService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import PlantsTable from "./plantsTable";
import SearchBox from './searchBox';

class Plants extends Component {
  state = {
    plants: [],
    categories: [],
    pageSize: 4,
    currentPage: 1,
    searchQuery: "",
    selectedGenres: null,
  };

  componentDidMount() {
    const categories = [{ name: "All Categories" }, ...getCategories()];
    this.setState({ plants: getPlants(), categories: categories });
  }


  handleLikeToggle = (plant) => {
    console.log("Like", plant.title);
    const plants = [...this.state.plants];
    const index = plants.indexOf(plant);
    plants[index] = { ...plants[index] };
    plants[index].liked = !plants[index].liked;

    this.setState({ plants: plants });
  };

  handlePageChange = (page) => {
    console.log(page);
    this.setState({ currentPage: page });
  };
  
  handleCategorySelect = (category) => {
    console.log(category);
    this.setState({ selectedCategory: category, currentPage: 1 });
  };

  handleSearch = (query) => {
    this.setState({searchQuery: query, selectedCategory: null, currentPage: 1})
  }


  render() {
    console.log("plants", this.state.plants);
    const {
      pageSize,
      currentPage,
      selectedCategory,
      searchQuery,
      plants: allPlants,
    } = this.state;

    // if (count === 0) return <p>There is no details in the database</p>;

    //for selecting item according to category
    const filtered =
      selectedCategory && selectedCategory._id
        ? allPlants.filter((m) => m.category._id === selectedCategory._id)
        : allPlants;

    //for pagination
    const plants = paginate(filtered, currentPage, pageSize);

    return (
      <div className="items-container wrap-container">
        <SearchBox value={searchQuery} onChange={this.handleSearch}/>
        <div>
          <ListGroup
            items={this.state.categories}
            selectedItem={this.state.selectedCategory}
            onItemSelect={this.handleCategorySelect}
          />
        </div>
        <div className="each-item-container">
          <h1 className="title-second title-product">Our Products</h1>
          {/* <p>There are {filtered .length} plants</p> */}
          <PlantsTable
            plants={plants}
            onLike={this.handleLikeToggle}
            onDelete={this.handleDelete}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Plants;
