"use client";

import React from "react";
import { useSession, signIn } from "next-auth/react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InfoIcon from "@mui/icons-material/Info";

function InfoDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button onClick={handleClickOpen} className="px-0">
        <InfoIcon className="px-0" />
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className="text-white">{"Annotation"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div>
              <ol className="list-decimal text-white ml-4">
                <li>
                  This project was created for POC (Prove of Concept) and
                  educational purposes only.
                </li>
                <li>
                  You can access by choosing one of these username from &nbsp;
                  <a
                    className="text-sky-500 underline"
                    href="https://melivecode.com/"
                  >
                    melivecode
                  </a>{" "}
                  &nbsp; at section 'USERS' and 'USER AUTHORIZATION'
                </li>
                <li>
                  You can login by using different username at section 'USERS'
                </li>
              </ol>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus className="text-sky-500">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default function NotLogin() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <>
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-center">
            <div className="text-xl mb-4">
              Welcome to TIC-TAC-TOE <InfoDialog />
            </div>
            <button
              onClick={() => signIn()}
              className="btn bg-slate-200 text-[#333333] mb-4"
            >
              Sign in to play
            </button>
            <div className="flex justify-center items-center text-sm">
              Get username &nbsp;
              <a
                href="https://melivecode.com/"
                className="text-sky-500 underline"
              >
                here
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
