import atexit
import os
import pyads
from pydualsense import pydualsense, PlayerID, TriggerModes, LedOptions, PulseOptions, Brightness
from collections import OrderedDict


class Ps5Controller(object):

    def __init__(self):

        try:
            print('Listening to controller events')
            self.dualsense = pydualsense()
            self.dualsense.init()
            self.currentCmd = {}
        except:
            print("Controller was not found")
            os._exit(1)

    def read(self): # return the buttons/triggers that you care about in this method

        return OrderedDict([
            ('LeftJoystickX', self.dualsense.state.LX),
            ('LeftJoystickY', self.dualsense.state.LY),
            ('RightJoystickX', self.dualsense.state.RX),
            ('RightJoystickY', self.dualsense.state.RY),
            ('LeftTrigger', self.dualsense.state.L2),
            ('RightTrigger', self.dualsense.state.R2),
            ('LeftBumper', self.dualsense.state.L1),
            ('RightBumper', self.dualsense.state.R1),
            ('ButtonTriangle', self.dualsense.state.triangle),
            ('ButtonCircle', self.dualsense.state.circle),
            ('ButtonSquare', self.dualsense.state.square),
            ('ButtonCross', self.dualsense.state.cross),
            ('LeftThumb', self.dualsense.state.L3),
            ('RightThumb', self.dualsense.state.R3),
            ('Share', self.dualsense.state.share),
            ('Options', self.dualsense.state.options),
            ('Ps', self.dualsense.state.ps),
            ('DPadUp', self.dualsense.state.DpadUp),
            ('DPadDown', self.dualsense.state.DpadDown),
            ('DPadLeft', self.dualsense.state.DpadLeft),
            ('DPadRight', self.dualsense.state.DpadRight),
            ('TouchBtn', self.dualsense.state.touchBtn),
            ('TrackPadTouch0Active', self.dualsense.state.trackPadTouch0.isActive),
            ('TrackPadTouch1Active', self.dualsense.state.trackPadTouch1.isActive),
            ('TrackPadTouch0ID', self.dualsense.state.trackPadTouch0.ID),
            ('TrackPadTouch1ID', self.dualsense.state.trackPadTouch1.ID),
            ('TrackPadTouch0X', self.dualsense.state.trackPadTouch0.X),
            ('TrackPadTouch0Y', self.dualsense.state.trackPadTouch0.Y),
            ('TrackPadTouch1X', self.dualsense.state.trackPadTouch1.X),
            ('TrackPadTouch1Y', self.dualsense.state.trackPadTouch1.Y),
            ('GyroPitch', self.dualsense.state.gyro.Pitch),
            ('GyroYaw', self.dualsense.state.gyro.Yaw),
            ('GyroRoll', self.dualsense.state.gyro.Roll),
            ('AccX', self.dualsense.state.accelerometer.X),
            ('AccY', self.dualsense.state.accelerometer.Y),
            ('AccZ', self.dualsense.state.accelerometer.Z),
            ('MicBtn', self.dualsense.state.micBtn)
            ]
        )

    def write(self, cmd):

        if self.currentCmd == cmd:
            return

        self.dualsense.light.setColorI(cmd['LedRed'], cmd['LedGreen'], cmd['LedBlue'])
        self.dualsense.light.setPlayerID(PlayerID(cmd['Player']))
        self.dualsense.audio.setMicrophoneMute(cmd['MicMute'])
        self.dualsense.audio.setMicrophoneLED(cmd['MicLed'])

        self.dualsense.light.setLEDOption(LedOptions(cmd['LedOptions']))
        self.dualsense.light.setPulseOption(PulseOptions(cmd['PulseOptions']))
        self.dualsense.light.setBrightness(Brightness(cmd['Brightness']))

        self.dualsense.setLeftMotor(cmd['LeftHaptic'])
        self.dualsense.setRightMotor(cmd['RightHaptic'])

        self.dualsense.triggerL.setMode(TriggerModes(cmd['LeftTriggerMode']))
        self.dualsense.triggerL.setForce(0, cmd['LeftTriggerLevel1'])
        self.dualsense.triggerL.setForce(1, cmd['LeftTriggerLevel2'])
        self.dualsense.triggerL.setForce(2, cmd['LeftTriggerLevel3'])
        self.dualsense.triggerL.setForce(3, cmd['LeftTriggerLevel4'])
        self.dualsense.triggerL.setForce(4, cmd['LeftTriggerLevel5'])
        self.dualsense.triggerL.setForce(5, cmd['LeftTriggerLevel6'])
        self.dualsense.triggerL.setForce(6, cmd['LeftTriggerLevel7'])

        self.dualsense.triggerR.setMode(TriggerModes(cmd['RightTriggerMode']))
        self.dualsense.triggerR.setForce(0, cmd['RightTriggerLevel1'])
        self.dualsense.triggerR.setForce(1, cmd['RightTriggerLevel2'])
        self.dualsense.triggerR.setForce(2, cmd['RightTriggerLevel3'])
        self.dualsense.triggerR.setForce(3, cmd['RightTriggerLevel4'])
        self.dualsense.triggerR.setForce(4, cmd['RightTriggerLevel5'])
        self.dualsense.triggerR.setForce(5, cmd['RightTriggerLevel6'])
        self.dualsense.triggerR.setForce(6, cmd['RightTriggerLevel7'])

        self.currentCmd = cmd

def close_connection(connection):
    print("Closing ADS connection")
    connection.close()


def remove_handle(connection, handle):
    print("Releasing ADS handle")
    connection.release_handle(handle)


if __name__ == '__main__':

    try:

        plc = pyads.Connection('127.0.0.1.1.1', 851)
        plc.open()
        atexit.register(close_connection, plc)

        plcHandleWrite = plc.get_handle('Global.controller')
        atexit.register(remove_handle, plc, plcHandleWrite)

        plcHandleRead = plc.get_handle('Global.controllerCmd')
        atexit.register(remove_handle, plc, plcHandleRead)

        controller_structure_def = (
            ('LeftJoystickX', pyads.PLCTYPE_INT, 1),
            ('LeftJoystickY', pyads.PLCTYPE_INT, 1),
            ('RightJoystickX', pyads.PLCTYPE_INT, 1),
            ('RightJoystickY', pyads.PLCTYPE_INT, 1),
            ('LeftTrigger', pyads.PLCTYPE_INT, 1),
            ('RightTrigger', pyads.PLCTYPE_INT, 1),
            ('LeftBumper', pyads.PLCTYPE_BOOL, 1),
            ('RightBumper', pyads.PLCTYPE_BOOL, 1),
            ('ButtonTriangle', pyads.PLCTYPE_BOOL, 1),
            ('ButtonCircle', pyads.PLCTYPE_BOOL, 1),
            ('ButtonSquare', pyads.PLCTYPE_BOOL, 1),
            ('ButtonCross', pyads.PLCTYPE_BOOL, 1),
            ('LeftThumb', pyads.PLCTYPE_BOOL, 1),
            ('RightThumb', pyads.PLCTYPE_BOOL, 1),
            ('Share', pyads.PLCTYPE_BOOL, 1),
            ('Options', pyads.PLCTYPE_BOOL, 1),
            ('Ps', pyads.PLCTYPE_BOOL, 1),
            ('DPadUp', pyads.PLCTYPE_BOOL, 1),
            ('DPadDown', pyads.PLCTYPE_BOOL, 1),
            ('DPadLeft', pyads.PLCTYPE_BOOL, 1),
            ('DPadRight', pyads.PLCTYPE_BOOL, 1),
            ('TouchBtn', pyads.PLCTYPE_BOOL, 1),
            ('TrackPadTouch0Active', pyads.PLCTYPE_BOOL, 1),
            ('TrackPadTouch1Active', pyads.PLCTYPE_BOOL, 1),
            ('TrackPadTouch0ID', pyads.PLCTYPE_INT, 1),
            ('TrackPadTouch1ID', pyads.PLCTYPE_INT, 1),
            ('TrackPadTouch0X', pyads.PLCTYPE_INT, 1),
            ('TrackPadTouch0Y', pyads.PLCTYPE_INT, 1),
            ('TrackPadTouch1X', pyads.PLCTYPE_INT, 1),
            ('TrackPadTouch1Y', pyads.PLCTYPE_INT, 1),
            ('GyroPitch', pyads.PLCTYPE_INT, 1),
            ('GyroYaw', pyads.PLCTYPE_INT, 1),
            ('GyroRoll', pyads.PLCTYPE_INT, 1),
            ('AccX', pyads.PLCTYPE_INT, 1),
            ('AccY', pyads.PLCTYPE_INT, 1),
            ('AccZ', pyads.PLCTYPE_INT, 1),
            ('MicBtn', pyads.PLCTYPE_BOOL, 1)
        )

        controllerCmd_structure_def = (
            ('LedRed', pyads.PLCTYPE_INT, 1),
            ('LedGreen', pyads.PLCTYPE_INT, 1),
            ('LedBlue', pyads.PLCTYPE_INT, 1),
            ('Player', pyads.PLCTYPE_INT, 1),
            ('LedOptions', pyads.PLCTYPE_INT, 1),
            ('PulseOptions', pyads.PLCTYPE_INT, 1),
            ('Brightness', pyads.PLCTYPE_INT, 1),
            ('LeftHaptic', pyads.PLCTYPE_INT, 1),
            ('RightHaptic', pyads.PLCTYPE_INT, 1),
            ('LeftTriggerMode', pyads.PLCTYPE_INT, 1),
            ('LeftTriggerLevel1', pyads.PLCTYPE_INT, 1),
            ('LeftTriggerLevel2', pyads.PLCTYPE_INT, 1),
            ('LeftTriggerLevel3', pyads.PLCTYPE_INT, 1),
            ('LeftTriggerLevel4', pyads.PLCTYPE_INT, 1),
            ('LeftTriggerLevel5', pyads.PLCTYPE_INT, 1),
            ('LeftTriggerLevel6', pyads.PLCTYPE_INT, 1),
            ('LeftTriggerLevel7', pyads.PLCTYPE_INT, 1),
            ('RightTriggerMode', pyads.PLCTYPE_INT, 1),
            ('RightTriggerLevel1', pyads.PLCTYPE_INT, 1),
            ('RightTriggerLevel2', pyads.PLCTYPE_INT, 1),
            ('RightTriggerLevel3', pyads.PLCTYPE_INT, 1),
            ('RightTriggerLevel4', pyads.PLCTYPE_INT, 1),
            ('RightTriggerLevel5', pyads.PLCTYPE_INT, 1),
            ('RightTriggerLevel6', pyads.PLCTYPE_INT, 1),
            ('RightTriggerLevel7', pyads.PLCTYPE_INT, 1),
            ('MicLed', pyads.PLCTYPE_BOOL, 1),
            ('MicMute', pyads.PLCTYPE_BOOL, 1)
        )

        ps5Controller = Ps5Controller()

        while True:
            plc.write_structure_by_name('', ps5Controller.read(), controller_structure_def, handle=plcHandleWrite)
            controllerCmd = plc.read_structure_by_name('', controllerCmd_structure_def, handle=plcHandleRead)
            ps5Controller.write(controllerCmd)

    finally:
        print("exiting application")
