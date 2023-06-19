import '../../styles/main.scss'
import './templates.scss'
import React, { useEffect } from 'react'
import type { RootState } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { load } from '../../redux/reducers/templates'
import { toggleShowFilterDropdown } from '../../redux/reducers/controls'
import { setFilters, toggleOptionChecked, clearFilters, removeSelectedFilter } from '../../redux/reducers/listing'
import { templatesData } from '../../config/initialTemplates'
import TemplateCard from '../TemplateCard'
import { filterItems } from '../../data/filters'

const Templates: React.FC = () => {
  const { templates } = useSelector((state: RootState) => state.templates)
  const { filters, selectedFilters } = useSelector((state: RootState) => state.listing.listing)
  const { controls } = useSelector((state:  RootState) => state.controls)
  const dispatch = useDispatch()

  const toggleFilter = (): void => {
    let filter = !controls.showFilterDropdown
    dispatch(toggleShowFilterDropdown(filter))
  }

  const toggleOption = (filter: any, option: any): void => {
    dispatch(toggleOptionChecked({ filterId: filter.id, optionId: option.id }))
  }

  useEffect(() => {
    dispatch(setFilters(filterItems))
    dispatch(load(templatesData))
  }, [])

  return (
    <div className="container">
      <div className="title-container">
        <h1 className="title">Templates ({ templates.length })</h1>

        <div className="filter-relative">
          <button onClick={toggleFilter} className="filter">
            Filters
            <img src="/src/assets/icons/filter.png" alt="" className="icon" />
          </button>
          {controls.showFilterDropdown &&
            <div className="filter-dropdown">
              <div className="filter-wrapper">
                <div className="filter-title">
                  <span className="title">Filters</span>
                  <button onClick={() => { dispatch(clearFilters()) }} className="clear">Clear all</button>
                </div>
                <div className="options-wrapper">
                  {/* Filter Container */}
                  {filters.map(filter => (
                    <div className="filter-section" key={filter.id}>
                      <div className="section-title">{ filter.title }</div>
                      <div className="option-container">
                        {filter.options.map(option => (
                          <div onClick={() => { toggleOption(filter, option) }} key={option.id} className="options">
                            <div className={`item ${option.checked ? 'checked' : ''}`}>
                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path></svg>
                            </div>
                            <span className="text">{ option.text }</span>
                          </div>
                        ))
                        }
                      </div>
                    </div>
                  ))
                  }
                </div>
                <div className="actions-wrapper">
                  <button className="apply-filter">Apply</button>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
      <div className="selected-filter-container">
        {
          selectedFilters.map(filter => (
            <button onClick={() => { dispatch(removeSelectedFilter(filter.id)) }} className="filter-button" key={filter.id}>{filter.text} </button>
          ))
        }
      </div>
      <div className="cards-container">
        {
          templates.map(template => (
            <TemplateCard template={template} key={template.id} />
          ))
        }
      </div>
      <div className="loader-container">
        <button className="load-more">Load more</button>
      </div>
      {/* <div className="action-container">
        <button className="preview">Preview</button>
        <button className="continue">Continue</button>
      </div> */}
    </div>
  )
}

export default Templates
