import React from 'react'

interface IPageTitle {
  children: any
}

export const PageTitle: React.FC<IPageTitle> = ({ children }) => {
  return <h1 className="px-2">{children}</h1>
}
