import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import * as emotion from '@emotion/core'
import { createSerializer } from 'jest-emotion'

Enzyme.configure({ adapter: new Adapter() })

expect.addSnapshotSerializer(createSerializer(emotion))
