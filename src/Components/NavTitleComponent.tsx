import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react/";

interface NavTitleComponentProps{
  onChange: React.Dispatch<React.SetStateAction<string>>
  newValue: () => void
  getRand: () => void
  
}


const NavTitleComponent = (props:NavTitleComponentProps) => {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div>
      <h1 className="my-12 text-center text-6xl lg:text-8xl text-white textShadow">
        PokéDex
      </h1>

      <div className="flex justify-center w-full text-xl">
        <input
          id="pkmnInput"
          className="w-4/12 border-black border-4 text-center hidden lg:block"
          type="text"
          placeholder="Pokemon name/number"
          onChange={(e)=> props.onChange(e.target.value)}
        />

        <button
          id="searchBtn"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-4 lg:px-16 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mx-3 text-sm lg:text-lg"
          onClick={props.newValue}
        >
          Search
        </button>

        <button
          id="randomBtn"
          type="button"
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg  px-4 lg:px-16 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 mx-3 text-sm lg:text-lg"
          onClick={props.getRand}
        >
          Random
        </button>

        <button
          onClick={openDrawer}
          className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg  px-4 lg:px-16 py-2.5 text-center text-sm lg:text-lg"
        >
          Favorites
        </button>

        

      <div className="flex justify-center lg:hidden">
        <input
          id="pkmnInput2"
          className="w-8/12 my-8 border-black border-4 text-center"
          type="text"
          placeholder="Pokemon name/number"
        />
      </div>
      
      {/* drawer component */}
        <React.Fragment>
          <Drawer
            placeholder={undefined}
            placement="right"
            open={open}
            onClose={closeDrawer}
            className="p-4"
          >
            <div className="mb-6 flex items-center justify-between">
              <Typography
                placeholder={undefined}
                variant="h5"
                color="blue-gray"
              >
                Material Tailwind
              </Typography>
              <IconButton
                placeholder={undefined}
                variant="text"
                color="blue-gray"
                onClick={closeDrawer}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
            </div>
            <Typography
              placeholder={undefined}
              color="gray"
              className="mb-8 pr-4 font-normal"
            >
              Material Tailwind features multiple React and HTML components, all
              written with Tailwind CSS classes and Material Design guidelines.
            </Typography>
            <div className="flex gap-2">
              <Button placeholder={undefined} size="sm" variant="outlined">
                Documentation
              </Button>
              <Button size="sm" placeholder={undefined}>
                Get Started
              </Button>
            </div>
          </Drawer>
        </React.Fragment>
      </div>
    </div>
  );
};

export default NavTitleComponent;
