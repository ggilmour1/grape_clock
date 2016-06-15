import time
import shutil

### set the default state 


#initialise a previous input variable to 0 (assume button not pressed last)

prev_input = 0
mic_on = "/Users/ggilmour1/Documents/RadioGrapevine/images/mic_live1.png"
mic_off = "/Users/ggilmour1/Documents/RadioGrapevine/images/mic_off1.png"
mic_state = "/Users/ggilmour1/Documents/RadioGrapevine/images/mic_state.png"

while True:
  #take a reading
  input = GPIO.input(17)
  set_mic_off(mic_off, mic_state)
  
  #if the last reading was low and this one high, print
  if ((not prev_input) and input):
    print("Button pressed")
    set_mic_on(mic_on, mic_state)
  
  #update previous input
  prev_input = input
  
  #slight pause to debounce
  time.sleep(0.05)


def set_mic_on(src, dst):
	### Copies the Mic_On file to the Mic_State file 
	shutil.copy(src, dst)

def set_mic_off(src, dst):
	### Copies the Mic_Off file to the Mic_State file 
	shutil.copy(src, dst)
