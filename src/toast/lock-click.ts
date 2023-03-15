let lockCount = 0;

export function lockClick(lock: boolean) {
  if (lock) {
    if (!lockCount) {
      document.body.classList.add('ghb-toast--unclickable');
    }

    lockCount++;
  } else {
    lockCount--;

    if (!lockCount) {
      document.body.classList.remove('ghb-toast--unclickable');
    }
  }
}
