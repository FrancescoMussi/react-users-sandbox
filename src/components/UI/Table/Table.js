import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../Buttons/Button'

const Table = props => {

  let columns = props.columns.map(item => (
    <th
      key={item}
      className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
    >
      {item}
    </th>
  ))

  return (
    <div className="bg-white shadow-md rounded my-6">
      <table className="text-left w-full border-collapse">
        <thead>
          <tr>
            {columns}
            {props.showActions ? (
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                Actions
              </th>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {props.list.map((item, i) => {
            return (
              <tr key={item.id} className="hover:bg-grey-lighter">
                {props.columns.map((itemKey, itemKeyIndex) => {
                  return (
                    <td
                      key={itemKeyIndex}
                      className="py-4 px-6 border-b border-grey-light"
                    >
                      {item[itemKey]}
                    </td>
                  )
                })}
                {props.showActions ? (
                  <td className="py-4 px-6 border-b border-grey-light">
                    {props.showGoToPageButton ? (
                      <Button
                        type="button"
                        theme="success"
                        text="View"
                        extraClasses={['mr-3']}
                        onClick={() => props.onGoToView(item)}
                      />
                    ) : null}
                    {props.showEditButton ? (
                      <Button
                        type="button"
                        theme="info"
                        text="Edit"
                        extraClasses={['mr-3']}
                        onClick={() => props.onEdit(item)}
                      />
                    ) : null}
                    {props.showDeleteButton ? (
                      <Button
                        type="button"
                        theme="danger"
                        text="Delete"
                        onClick={() => props.onDelete(item)}
                      />
                    ) : null}
                  </td>
                ) : null}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  list: PropTypes.array,
  showActions: PropTypes.bool,
  showDeleteButton: PropTypes.bool,
  showEditButton: PropTypes.bool,
  showGoToPageButton: PropTypes.bool,
  onEdit: PropTypes.func,
  onGoToView: PropTypes.func,
  onDelete: PropTypes.func
}

export default Table
