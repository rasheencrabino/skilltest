const fakeData = [
  {
    timeCreated: 'yyyy-mm-dd',
    category: 'Template Category',
    title: '{{Meta Title}}',
    openIn: '📄',
  },
  {
    timeCreated: '2025-01-24',
    category: 'Instagram Post',
    title: "OpenAI's Defense Sector Expansion: Strategic Implications ↗",
    openIn: '📄',
  },
  ...Array(8)
    .fill(0)
    .map(() => ({
      timeCreated: 'yyyy-mm-dd',
      category: 'Template Category',
      title: '{{Meta Title}}',
      openIn: '📄',
    })),
];

function App() {
  return (
    <div className='min-h-screen py-10 px-40 font-inter'>
        <h1 className='text-xl mb-6 font-inter'>History</h1>
        <table className='w-full border-collapse font-inter'>
          <thead>
            <tr className='text-xs'>
              <th className='px-4 text-left font-inter'>
                <input type='checkbox'/>
              </th>
              <th className='px-4 text-left text-xs font-inter font-semibold'>
                Time Created
              </th>
              <th className='px-4 text-left text-xs font-inter font-semibold'>
                Category
              </th>
              <th className='px-4 text-left text-xs font-inter font-semibold'>
                Title
              </th>
              <th className='px-4 text-center text-xs font-inter font-semibold'>
                Open in
              </th>
              <th className='px-4 text-left font-inter font-semibold'>
                <svg
                  width='36'
                  height='36'
                  viewBox='0 0 36 36'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M18 12.75C18 12.4739 17.7761 12.25 17.5 12.25C17.2239 12.25 17 12.4739 17 12.75V17H12.75C12.4739 17 12.25 17.2239 12.25 17.5C12.25 17.7761 12.4739 18 12.75 18H17V22.25C17 22.5261 17.2239 22.75 17.5 22.75C17.7761 22.75 18 22.5261 18 22.25V18H22.25C22.5261 18 22.75 17.7761 22.75 17.5C22.75 17.2239 22.5261 17 22.25 17H18V12.75Z'
                    fill='#646464'
                  />
                </svg>
              </th>
            </tr>
          </thead>
          <tbody>
            {fakeData.map((row, index) => (
              <tr key={index} className='hover:bg-gray-50'>
                <td className='px-4 text-left text-sm font-inter'>
                  <input type='checkbox'/>
                </td>
                <td className='px-4 font-inter text-sm text-gray-500'>
                  {row.timeCreated}
                </td>
                <td className='px-4 font-inter'>
                  <span className='text-gray-600 text-xs bg-gray-100 border border-gray-200  py-0.5 px-1 rounded-full'>
                    {row.category}
                  </span>
                </td>
                <td className='px-4 font-inter text-sm text-gray-500'>
                  {row.title}
                </td>
                <td className='px-4 font-inter text-sm text-gray-500 flex justify-center items-center'>
                  <svg
                    width='36'
                    height='36'
                    viewBox='0 0 36 36'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className=''
                  >
                    <path
                      d='M24 22.1159V12.8841C24 12.3565 23.819 11.9138 23.457 11.5464C23.0949 11.179 22.6506 11 22.1076 11H12.8924C12.3494 11 11.9051 11.179 11.543 11.5464C11.181 11.9138 11 12.3565 11 12.8841V22.1159C11 22.6529 11.181 23.0957 11.543 23.463C11.9051 23.821 12.3576 24 12.8924 24H22.1076C22.6424 24 23.0949 23.821 23.457 23.463C23.819 23.1051 24 22.6623 24 22.1159ZM18.8905 12.1775V22.8696H12.8924C12.6867 22.8696 12.5057 22.8036 12.3658 22.6717C12.2259 22.5304 12.1601 22.342 12.1601 22.1159V12.8841C12.1601 12.6674 12.2259 12.479 12.3658 12.3377C12.5057 12.1964 12.6785 12.1304 12.8924 12.1304H18.8905V12.1775ZM22.8399 22.1159C22.8399 22.342 22.7741 22.5399 22.6342 22.6717C22.4943 22.813 22.3215 22.8696 22.1076 22.8696H20.0506V12.1304H22.1076C22.3215 12.1304 22.4943 12.1964 22.6342 12.3377C22.7741 12.479 22.8399 12.6674 22.8399 12.8841V22.1159Z'
                      fill='#838383'
                    />
                  </svg>
                </td>
                <td className='px-4 text-center text-sm font-inter text-gray-500'></td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}

export default App;
