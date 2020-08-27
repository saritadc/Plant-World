import React, { Component } from "react";

import { getPlants } from "../services/getPlantData"; //*
import { getCategories } from "../services/getCategory";//*
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import PlantsTable from "./plantsTable";
import SearchBox from "./searchBox";
import { PLANT_LISTS, PLANT_CATEGORY, baseURL } from './../constants/endpoints';


class Plants extends Component {
  state = {
    plants: [],
    categories: [],
    pageSize: 4,
    currentPage: 1,
    searchQuery: "",
    selectedGenres: null,
  };

  async componentDidMount() {
    const { data } = await getCategories(); 
    console.log("data",data)
    const categories = [
      {
        _id: "",
        name: "All Categories",
        imageURL:
          "https://images.unsplash.com/photo-1534754789238-6250d515412f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
      },
      ...data,
    ];

    const { data: plants} = await getPlants();
    this.setState({ plants, categories: categories })
    console.log("plants");
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
    this.setState({ selectedCategory: category, searchQuery: "", currentPage: 1 });
  };

  handleSearch = (query) => {
    this.setState({searchQuery: query, selectedCategory: null, currentPage: 1})
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      selectedCategory,
      searchQuery,
      plants: allPlants,
    } = this.state;

    let filtered = allPlants;
    if (searchQuery)
      filtered = allPlants.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedCategory && selectedCategory._id)
      filtered = allPlants.filter(m => m.category[" _id"] === selectedCategory._id
      );
      console.log("filtered", filtered, selectedCategory);
    const plants = paginate(filtered, currentPage, pageSize);
        console.log("pagina",plants);
    return { totalCount: filtered.length, data: plants };
  }

  render() {
    console.log("plants", this.state.plants);
    const {
      pageSize,
      currentPage,
      searchQuery,
    } = this.state;

  
    const { totalCount, data: plants } = this.getPageData();
    return (
      <div className="items-container wrap-container">
        <div className="category-container">
          <h1 className="title-second title-product category-title">
            Category
          </h1>
          <ListGroup
            items={this.state.categories}
            selectedItem={this.state.selectedCategory}
            onItemSelect={this.handleCategorySelect}
          />
        </div>
        <div className="each-item-container">
          <h1 className="title-second title-product">Our Products</h1>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <PlantsTable
            plants={plants}
            onLike={this.handleLikeToggle}
          />
          <Pagination
            itemsCount={totalCount}
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
