// @flow
import React, { PureComponent } from 'react'
import styles from './ViewReport.scss'

export type ViewReport_Props = {

}

class ViewReport extends PureComponent<ViewReport_Props, any> {
    render() {
        return (
            <div className={styles.wrapper}>
                {'ViewReport'}
            </div>
        )
    }
}

export default ViewReport
