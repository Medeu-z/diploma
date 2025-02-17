import {
    createSlice,
    Dispatch,
    PayloadAction,
  } from "@reduxjs/toolkit";
  import { useSelector } from "react-redux";
  import { getCategories } from "../../../shared/model";

  export const initialState: {
    data: any[]; 
    isLoading: boolean;
    filterData: any
  } = {
    data: [],
    isLoading: false,
    filterData: {}
  };
  
  export const categoryModel = createSlice({
    name: "categories",
    initialState,
    reducers: {
      SET_CATEGORY: (state = initialState, {payload}: PayloadAction<any[]>) => {     
        state.data = [...payload];                                       
      },
      SET_CATEGORY_LOADING: (state = initialState, { payload }: PayloadAction<boolean>) => {
        state.isLoading = payload;
      },
      SET_CATEGORY_FILTER: (state = initialState, { payload }: PayloadAction<any[]>) => {
        state.filterData = {...payload};                              
      },
    },
  });
  const { SET_CATEGORY, SET_CATEGORY_FILTER } = categoryModel.actions

  export const useCategories = () =>
    useSelector(
      (state: any) => {
        return state.categories;
      }
    );

    export const getCategoryList = () => {
      
      return async (dispatch: Dispatch) => {
        // dispatch(SET_CATEGORY_LOADING(true))
        await getCategories().then((data) => {
         // dispatch(SET_CATEGORY_LOADING(false))
          dispatch(SET_CATEGORY(data as any))
        });
      }
    }

    export const setCategoryFilter = (params: any) => {
      return async (dispatch: Dispatch) => {
          dispatch(SET_CATEGORY_FILTER(params))
      }
    }
  
  
    export const setCategoryList = (obj: any) => ({
      type: 'SET_CATEGORY',
      payload: {...obj}
    })

    export const setCategoryData = (obj: any) => ({
      type: 'SET_CATEGORY_FILTER',
      payload: {...obj}
    })
  
    export const setCategoryLoading = (isLoading: boolean) => ({
      type: 'SET_CATEGORY_LOADING',
      payload: isLoading
    })
  
 
  
  export const reducer = categoryModel.reducer;