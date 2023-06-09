import { useCallback } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { NoBscProviderError } from "@binance-chain/bsc-connector";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from "@web3-react/walletconnect-connector";
import {
  // ConnectorNames,
  connectorLocalStorageKey,
} from "redrum-pancake-uikit";
import { connectorsByName } from "../utils/web3React";
import { setupNetwork } from "../utils/wallet";
import { useSnackbar } from "notistack";

// import { profileClear } from "state/profile";
// import { useAppDispatch } from "state";

const useAuth = (network) => {
  // const dispatch = useAppDispatch();
  const { activate, deactivate } = useWeb3React();
  const { enqueueSnackbar } = useSnackbar();
  const login = useCallback((connectorID) => {
    
    const connector = connectorsByName[connectorID];
    // console.log(connector)
    if (connector) {
      activate(connector, async (error) => {
        console.log(error);
        if (error instanceof UnsupportedChainIdError) {          
          const hasSetup = await setupNetwork(network);
          if (hasSetup===1) {
            activate(connector);
          }
        } else {
          window.localStorage.removeItem(connectorLocalStorageKey);
          if (
            error instanceof NoEthereumProviderError ||
            error instanceof NoBscProviderError
          ) {
            enqueueSnackbar("No provider was found", {
              variant: "error",
            });
          } else if (
            error instanceof UserRejectedRequestErrorInjected ||
            error instanceof UserRejectedRequestErrorWalletConnect
          ) {
            if (connector instanceof WalletConnectConnector) {
              const walletConnector = connector;
              walletConnector.walletConnectProvider = null;
            }
            enqueueSnackbar("Login in order to access your account", {
              variant: "error",
            });
          } else {
            enqueueSnackbar(error.message, {
              variant: "error",
            });
          }
        }
      });
    } else {
      enqueueSnackbar("The connector config is wrong", {
        variant: "error",
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = useCallback(() => {
    // dispatch(profileClear());
    deactivate();
    if (window.localStorage.getItem('walletconnect')) {
      connectorsByName.walletconnect.close()
      connectorsByName.walletconnect.walletConnectProvider = null
    }
    window.localStorage.removeItem(connectorLocalStorageKey)
  }, [deactivate]);

  return { login, logout };
};

export default useAuth;
