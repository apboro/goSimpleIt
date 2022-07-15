import React from "react";
import {usePage, Link} from "@inertiajs/inertia-react";

import style from './proposalsList.module.css'

export default function ProposalsList(props) {
    const {proposals} = usePage().props;

    return (
        <div className={`${style.proposalCard}`}>
            <p className={`${style.proposalText}`}>
                Sent Proposals
            </p>

            {proposals
                ? proposals.map((proposal) => {
                    return (
                        <div key={proposal.id} className={`${style.proposalItem}`}>
                            <div className={`${style.proposalItemText}`}>Proposal ID: {proposal.id}</div>
                            <div className={`${style.proposalItemText}`}>Proposal status: {proposal.status}</div>
                                <Link
                                href={route('order.details', proposal.order_id)}>
                                    <div className={`${style.proposalItemText}`}>Order ID: {proposal.order_id} </div>
                                </Link>
                            </div>
                    );
                })
                : "You sent no proposals yet"}
        </div>

    );
}
