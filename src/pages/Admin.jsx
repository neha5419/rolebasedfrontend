




export default function Admin({ name,email }) {
    return (
      <div className="flex flex-wrap gap-4">
       
          <div
          
            className="bg-white shadow-md rounded-lg p-6 mx-1 w-64"
          >
            <h2 className="text-xl font-semibold text-gray-800 text-center">
              {name}
            </h2>
            <h3 className="text-md text-gray-600 text-center">{email}</h3>
          </div>
        
      </div>
    );
  }
  