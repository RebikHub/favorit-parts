import { useState } from 'react'
import { ListGroup } from './components/ListGroup/ListGroup'
import { Search } from './components/Search/Search'
import { Table } from './components/Table/Table'
import { useDebounce } from './utils/hooks/useDeabounce'
import { useGetSearchPriceQuery } from './api'
import { useMemo } from 'react'
import { checkEmptyItem } from './utils/checkEmptyItem'
import { errorMessages } from './utils/errorMessages'
import { useCallback } from 'react'

function App() {
  const [searchNumber, setSearchNumber] = useState('')
  const [activeBrandId, setActiveBrand] = useState()

  const debounceValue = useDebounce({ initValue: searchNumber })

  const { data, isError, isFetching } = useGetSearchPriceQuery({
    number: debounceValue || undefined,
    brand: activeBrandId || undefined
  }, {skip: !searchNumber})

  const onSearchNumber = useCallback((e) => {
    setActiveBrand(undefined)
    setSearchNumber(e.currentTarget.value)
  }, [])

  const onChangeBrand = useCallback((id) => {
    setActiveBrand(id)
  }, [])

  const brands = useMemo(() => {
    if (checkEmptyItem(data?.goods)) {
      return []
    }
    return (data?.goods || []).map((e) => ({
      title: e.brand,
      id: e.goodsID
    }))
  }, [data?.goods])

  const errorMessage = useMemo(() => {
    console.log('usememo-data?.error: ', data?.error)
    if (data?.error) {
      return errorMessages(data?.error)
    }

    if (checkEmptyItem(data?.goods)) {
      return errorMessages('Product not found in the database!')
    }

    if (isError) {
      return errorMessages('')
    }

    return ''

  }, [data?.error, data?.goods, isError])

  const brandAnalogues = useMemo(() => {
    if (data?.goods?.[0]?.analogues) {
      return data?.goods?.[0]?.analogues.map((e) => ({
        id: e.goodsID,
        title: e.brand,
        price: e.price,
        count: e.count
       }))
     }

    return []
  }, [data?.goods])

  return (
    <main className='d-flex container pt-5 flex-column gap-6'>
      <h1 className='fs-xl text-center'>Подбор номенклатуры</h1>
      <Search onSearch={onSearchNumber} errorMessage={errorMessage} isLoading={isFetching} />
      {!activeBrandId && data?.goods && brands.length > 0 && < ListGroup items={brands} onChange={onChangeBrand} activeId={activeBrandId} />}
      {brandAnalogues.length > 0 && <Table items={brandAnalogues} />}
    </main>
  )
}

export default App
