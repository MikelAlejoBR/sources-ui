import React from 'react';
import PropTypes from 'prop-types';
import {
    EmptyStateBody,
    EmptyState,
    EmptyStateIcon,
    Title,
    Button,
    EmptyStateVariant,
    Bullseye
} from '@patternfly/react-core';
import { CheckCircleIcon } from '@patternfly/react-icons';
import { FormattedMessage } from 'react-intl';

const FinishedStep = ({ onClose, title, successfulMessage }) => (
    <Bullseye>
        <EmptyState variant={ EmptyStateVariant.full }>
            <EmptyStateIcon icon={ CheckCircleIcon } color="var(--pf-global--success-color--100)" />
            <Title headingLevel="h5" size="lg">
                { title }
            </Title>
            <EmptyStateBody>
                { successfulMessage }
            </EmptyStateBody>
            <Button variant="primary" onClick={ onClose }>
                <FormattedMessage
                    id="sources.backToSources"
                    defaultMessage="Back to Sources"
                />
            </Button>
        </EmptyState>
    </Bullseye>
);

FinishedStep.propTypes = {
    onClose: PropTypes.func.isRequired,
    successfulMessage: PropTypes.node.isRequired,
    title: PropTypes.node.isRequired
};

export default FinishedStep;
