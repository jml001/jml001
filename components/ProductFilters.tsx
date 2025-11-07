'use client'

import { useState } from 'react'
import { BathtubType } from '@/types/product'

interface ProductFiltersProps {
  onFilterChange: (filters: {
    bathtubType: BathtubType[]
    therapies: string[]
    search: string
  }) => void
}

export default function ProductFilters({ onFilterChange }: ProductFiltersProps) {
  const [selectedTypes, setSelectedTypes] = useState<BathtubType[]>([])
  const [selectedTherapies, setSelectedTherapies] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const bathtubTypes: { value: BathtubType; label: string }[] = [
    { value: 'freestanding', label: 'Freestanding' },
    { value: 'alcove', label: 'Alcove' },
    { value: 'drop-in', label: 'Drop-In' },
    { value: 'undermount', label: 'Undermount' },
  ]

  const therapyOptions = [
    { value: 'air-therapy', label: 'Air Therapy' },
    { value: 'hydro-therapy', label: 'Hydro Therapy' },
    { value: 'thermalift', label: 'ThermaLift' },
    { value: 'chromatherapy', label: 'Chromatherapy' },
  ]

  const handleTypeToggle = (type: BathtubType) => {
    const newTypes = selectedTypes.includes(type)
      ? selectedTypes.filter(t => t !== type)
      : [...selectedTypes, type]

    setSelectedTypes(newTypes)
    onFilterChange({
      bathtubType: newTypes,
      therapies: selectedTherapies,
      search: searchTerm,
    })
  }

  const handleTherapyToggle = (therapy: string) => {
    const newTherapies = selectedTherapies.includes(therapy)
      ? selectedTherapies.filter(t => t !== therapy)
      : [...selectedTherapies, therapy]

    setSelectedTherapies(newTherapies)
    onFilterChange({
      bathtubType: selectedTypes,
      therapies: newTherapies,
      search: searchTerm,
    })
  }

  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
    onFilterChange({
      bathtubType: selectedTypes,
      therapies: selectedTherapies,
      search: value,
    })
  }

  const clearFilters = () => {
    setSelectedTypes([])
    setSelectedTherapies([])
    setSearchTerm('')
    onFilterChange({
      bathtubType: [],
      therapies: [],
      search: '',
    })
  }

  const activeFiltersCount = selectedTypes.length + selectedTherapies.length + (searchTerm ? 1 : 0)

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Filters</h2>
        {activeFiltersCount > 0 && (
          <button
            onClick={clearFilters}
            className="text-sm text-bainultra-primary hover:underline"
          >
            Clear All ({activeFiltersCount})
          </button>
        )}
      </div>

      {/* Search */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-2">Search</label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          placeholder="Search products..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bainultra-primary focus:border-transparent"
        />
      </div>

      {/* Bathtub Type - Primary Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center">
          Bathtub Type
          <span className="ml-2 text-xs bg-bainultra-accent text-white px-2 py-1 rounded">
            Primary
          </span>
        </h3>
        <div className="space-y-2">
          {bathtubTypes.map((type) => (
            <label key={type.value} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedTypes.includes(type.value)}
                onChange={() => handleTypeToggle(type.value)}
                className="w-4 h-4 text-bainultra-primary focus:ring-bainultra-primary border-gray-300 rounded"
              />
              <span className="ml-3">{type.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Therapies */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Therapies</h3>
        <div className="space-y-2">
          {therapyOptions.map((therapy) => (
            <label key={therapy.value} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedTherapies.includes(therapy.value)}
                onChange={() => handleTherapyToggle(therapy.value)}
                className="w-4 h-4 text-bainultra-primary focus:ring-bainultra-primary border-gray-300 rounded"
              />
              <span className="ml-3">{therapy.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden w-full btn-primary"
      >
        {isOpen ? 'Close Filters' : 'Show Filters'} ({activeFiltersCount})
      </button>
    </div>
  )
}
